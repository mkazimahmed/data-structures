import React from "react";
import { BinaryTree } from "../../../core/binaryTreeP";

export const BinarySearchTree = () => {
  const bst = new BinaryTree();
  bst.insert(15);
  bst.insert(25);
  bst.insert(10);
  bst.insert(7);
  bst.insert(22);
  bst.insert(17);
  bst.insert(13);
  bst.insert(5);
  bst.insert(9);
  bst.insert(27);
  // bst.inOrder();
  // bst.preOrder();
  // console.log(bst.search(10));
  bst.flatten();

  console.log(bst);

  return (
    <div>
      <div>
        <h2>In-Order Traversal - (Push all) left, (pop) root, (go to) right</h2>
        <div>
          {`//          15
        //         /  \
        //        10   25
        //       / \   / \
        //      7  13 22  27
        //     / \    /
        //    5   9  17

        // 5, 7, 9, 10, 13, 15, 27, 22, 25, 27`}
        </div>
        <ol>
          <li>Maintain a Stack</li>
          <li>Push all lefts</li>
          <li>Pop a left</li>
          <li>Go to right</li>
          <li>If right exists</li>
          <li>Repeat step 2</li>
        </ol>
      </div>
      <div>
        <h2>
          Pre-Order Traversal - (push and pop) root, (add) left, (add) right
        </h2>
        <div>
          {`//          15
            //         /  \
            //        10   25
            //       / \   / \
            //      7  13 22  27
            //     / \    /
            //    5   9  17

            // 15, 10, 7, 5, 9, 13, 25, 22, 17, 27`}
        </div>
        <ol>
          <li>Maintain a Stack</li>
          <li>Push root</li>
          <li>Start a loop based on Stack</li>
          <li>Pop and print</li>
          <li>If right exists, push</li>
          <li>If left exists, push</li>
          <li>Go to step 4</li>
        </ol>
      </div>
      <div>
        <h2>Flatten - first left, deep right, swap</h2>
        <div>
          {`//          15
            //         /  \
            //        10   25
            //       / \   / \
            //      7  13 22  27
            //     / \    /
            //    5   9  17

            // 15, 10, 7, 5, 9, 13, 25, 22, 17, 27`}
        </div>
        <ol>
          <li>Set root as current</li>
          <li>If left exists, go to left</li>
          <li>Go all the way down to right</li>
          <li>Assign currents right to bottom right</li>
          <li>Swap left to right</li>
          <li>Remove left</li>
          <li>Make current as next right</li>
        </ol>
      </div>
    </div>
  );
};
