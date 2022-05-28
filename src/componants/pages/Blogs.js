import React from 'react';

const Blogs = () => {
    return (
        <div className='xl:w-[80%] lg:w-[80%] mx-auto h-screen'>
            <h2 className='text-3xl  font-bold'>How to improve React app performance : </h2>
            <p className='text-2xl'>
                In order to make a React app performance we need to concern  - to give necessary props in a component, using immutable data structure , using stateless component or functional component , need to concern about dependency and so many .
            </p>
            <div className='my-12'>
                <h2 className='text-3xl  font-bold'>Difference ways to manage state  </h2>
                <p className='text-2xl '>
                    There are many ways to manage states in React . Some of are -
                    <p>
                        1. using hooks in react
                    </p>
                    <p>
                        2.Using context API
                    </p>
                    <p>
                        3.Using Local State in rect
                    </p>
                </p>
            </div>
            <h2 className='text-3xl  font-bold'>What does Prototypal inheritance work ? </h2>
            <p className='text-2xl'>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
            </p>
            <h2 className='text-3xl  font-bold'>What is Unit Testing? Why should write unit tests? </h2>
            <p className='text-xl'>

                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
            </p>
            <p className='text-xl'>

                To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:
                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
            </p>
            <h2 className='text-3xl  font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? </h2>
            <p className='text-2xl'>
                I will get search input value then i compare serch data by useing if else
            </p>
        </div>
    );
};


export default Blogs;