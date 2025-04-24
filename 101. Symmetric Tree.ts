//https://leetcode.com/problems/symmetric-tree/description/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isMirrorTree(p: TreeNode | null, q: TreeNode | null): boolean {

    if (!p && !q) {
        return true
    }

    if (p?.val !== q?.val) {
        return false
    }

    return isMirrorTree(p?.left || null, q?.right || null) && isMirrorTree(p?.right || null, q?.left || null)
};

function isSymmetric(root: TreeNode | null): boolean {

    return isMirrorTree(root?.left || null, root?.right || null)
};