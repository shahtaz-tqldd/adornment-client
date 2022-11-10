import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

const Blogs = () => {
  return (
    <div className='container question-container'>
      <h1>Questions Answering Section</h1>
      {/* question 1 */}
      <div className='question'>
        <h2>1. Difference between SQL and NoSQL</h2>
        <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br/><br/> Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes.</p>
        <p>SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships. NoSQL databases need not stick to this format, but generally fit into one of four broad categories: 1. Column-oriented 2. Key-Value, 3.Document and 4. Graph databases</p>
      </div>

      {/* question 2 */}
      <div className='question'>
        <h2>2. What is JWT, and how does it work?</h2>
        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued</p>
        <p>JWT differs from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
      </div>

      {/* question 3 */}
      <div className='question'>
        <h2>3. What is the difference between javascript and NodeJS?</h2>
        <p><b>NodeJs:</b> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
        <p><b>Javascript</b> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
        <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
      </div>

      {/* question 4 */}
      <div className='question'>
        <h2>4. How does NodeJS handle multiple requests at the same time?</h2>
        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. The key of this operation is async functionality of node js. which helps to hold all other operation at the que and run them using the command await after completion of a required fuction</p>
        
      </div>
    </div>

  )
}

export default Blogs