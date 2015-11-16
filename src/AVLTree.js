{
    let default_cmp_fn = (a, b) => {
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0;
    };

    class Node {
        constructor(val, key, parent, left, right) {
            this.val = val;
            this.key = key;
            this.parent = parent;
            this.left = left;
            this.right = right;
        }

        violates_AVL_property() {
            if (Math.abs(this.balance_factor()) > 1) {
                return this
            }
            return this.parent && this.parent.violates_AVL_property();
        }

        balance_factor() {
            return (this.right ? this.right.height : -1) - (this.left ? this.left.height : -1);
        }

        /**
         * Recomputes the height of a node, starting from the bottom and working
         * it's weight up. Complexity linear to the height of the tree.
         * (log(n) if tree is balanced)
         */
        recalc_height() {
            this.height = Math.max(
                    (this.left ? this.left.height : -1),
                    (this.right ? this.right.height : -1)
                ) + 1;
            this.parent && this.parent.recalc_height();
        }

        rotate(is_left_rotation) {
            let other;

            // apply rotation
            if (is_left_rotation) {
                other = this.right;
                this.right = other.left;
                if (this.right) {
                    this.right.parent = this;
                }
                other.left = this;
            } else {
                other = this.left;
                this.left = other.right;
                if (this.left) {
                    this.left.parent = this;
                }
                other.right = this;
            }

            // rebind parent
            if (this.is_left()) {
                this.parent.left = other;
            } else if (this.is_right()) {
                this.parent.right = other;
            }
            other.parent = this.parent;
            this.parent = other;

            // update height
            this.recalc_height();

            return other;
        }

        is_left() {
            return this.parent && this.parent.left === this;
        }

        is_right() {
            return this.parent && this.parent.right === this;
        }

        prev () {
            if (this.left) {
                return right_most_node(this.left);
            }
            var possible_next = this;
            do {
                if (possible_next.is_right()) {
                    return possible_next.parent;
                }
                possible_next = possible_next.parent;
            } while (possible_next);
        }

        next () {
            if (this.right) {
                return left_most_node(this.right);
            }
            var possible_next = this;
            do {
                if (possible_next.is_left()) {
                    return possible_next.parent;
                }
                possible_next = possible_next.parent;
            } while (possible_next);
        }

        rebalance() {
            let balance = this.balance_factor(),
                child = balance > 1/*right heavy*/ ? this.right : this.left,
                child_balance = child.balance_factor();

            if (balance > 1 ? child_balance < 0 : child_balance > 0) {
                // we're in left-right or right-left situation, requiring double rotation
                child.rotate(child_balance > 0);
            }

            return this.rotate(balance > 1);
        }
    }

    let do_get = (key, node, round_down = false, cmp = default_cmp_fn)  => {
        function do_get_recursive (node) {
            if (!node) {
                return undefined
            }
            return {
                "-1": () => do_get_recursive(node.left) || (round_down && node),
                0: () => node,
                1: () => do_get_recursive(node.right) || (round_down && node)
            }[cmp(key, node.key)]();
        }
        var result = do_get_recursive(node);

        if (!result) {
            return undefined;
        }
        if (result && round_down && result.key > key) {
            return result.prev()
        }
        return result;
    };

    let left_most_node = (node) => {
        if (node.left) {
            return left_most_node(node.left);
        }
        return node;
    };

    let right_most_node = (node) => {
        if (node.right) {
            return right_most_node(node.right);
        }
        return node;
    };

    var AVLTree = class {

        constructor(compare_fn = default_cmp_fn) {
            this._root = undefined;
            this.length = 0;
            this.cmp = compare_fn
        }

        get(key) {
            var node = do_get(key, this._root, undefined, this.cmp);
            return node && node.val;
        }

        first_matching(key) {
            return do_get(key, this._root, true, this.cmp);
        }

        put(key, val) {
            var new_node,
                do_put = (node, parent) => {
                    if (!node) {
                        new_node = new Node(val, key, parent);
                        return new_node
                    }
                    ({
                        "-1": () => node.left = do_put(node.left, node),
                        0: () => {
                            node.val = val;
                            return node
                        },
                        1: () => node.right = do_put(node.right, node)
                    })[this.cmp(key, node.key)]();

                    return node
                };
            if (!this._root) {
                this._root = new Node(val, key);
                this.length++;
            } else {
                do_put(this._root);

                if (new_node) {
                    this.length++;
                    new_node.recalc_height();
                    var violation;
                    while (violation = new_node.violates_AVL_property()) {
                        if (violation == this._root) {
                            this._root = violation.rebalance();
                            violation.recalc_height();
                        } else {
                            violation.rebalance();
                        }
                    }
                }
            }
            return this;
        }

        first () {
            return this._root && left_most_node(this._root)
        }

        last () {
            return this._root && right_most_node(this._root)
        }

        *[Symbol.iterator]() {
            if (this._root) {
                let curr_node = left_most_node(this._root);
                do {
                    yield curr_node.val
                } while (curr_node = curr_node.next())
            }
        }

    }
}