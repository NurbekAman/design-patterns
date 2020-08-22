Definition

An object which represents an instruction to perform a particular 
action. Contains all the information necessary for the action to be taken.

Problem

not clear the problem

Summary

1. Encapsulate all details of an operation in a separate object
2. Define instruction for applying the command
3. Optionally define instructions for undoing the command
4. Can create composite commands


Apply

When you want to convert command to object with own state
When you want to query command, implement them consequently or pass thwrough network
When you need undo operation

Steps

Create interface command and define a main "run" method
Create concrete class of interface 
Create a field for receiver
 