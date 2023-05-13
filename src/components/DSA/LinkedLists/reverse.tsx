import React from "react";
import { SinglyLinkedList } from "../../../core/linkedList2";

export const Reverse = () => {
  const singlyLinkedList = new SinglyLinkedList();

  singlyLinkedList.addToHead(5);
  singlyLinkedList.addToHead(4);
  singlyLinkedList.addToHead(3);
  singlyLinkedList.addToHead(2);
  singlyLinkedList.addToHead(1);
  singlyLinkedList.addToTail(6);
  singlyLinkedList.addToTail(7);
  singlyLinkedList.addToTail(8);
  singlyLinkedList.addToTail(9);
  singlyLinkedList.addToTail(10);
  singlyLinkedList.removeAt(5);
  singlyLinkedList.insetAt(5, 6);
  singlyLinkedList.reverse();

  // singlyLinkedList.pop();
  // singlyLinkedList.shift();
  const list = singlyLinkedList.print();
  const length = singlyLinkedList.length();
  // singlyLinkedList.reverse2();
  // singlyLinkedList.print();

  // singlyLinkedList.pop()
  // singlyLinkedList.pop()
  // singlyLinkedList.pop()
  // singlyLinkedList.print()
  // singlyLinkedList.shift()
  // singlyLinkedList.print()
  // singlyLinkedList.shift()
  // singlyLinkedList.print()
  // singlyLinkedList.length()
  // singlyLinkedList.insertAt(2, 5)
  // singlyLinkedList.print()
  // singlyLinkedList.insertAt(4, 1)
  // singlyLinkedList.print()
  // singlyLinkedList.removeAt(4)
  // singlyLinkedList.removeAt(2)
  // singlyLinkedList.print()

  // const doublyLinkedList = new DoublyLinkedList()
  // console.log('Hello')
  // doublyLinkedList.addToHead(5)
  // doublyLinkedList.addToHead(4)
  // doublyLinkedList.addToHead(3)
  // doublyLinkedList.addToHead(2)
  // doublyLinkedList.addToHead(1)
  // doublyLinkedList.print()
  // doublyLinkedList.reverse()
  // doublyLinkedList.print()
  // console.log(doublyLinkedList)

  return (
    <>
      <div>List: {list} </div>
      <div>Length: {length}</div>
    </>
  );
};
