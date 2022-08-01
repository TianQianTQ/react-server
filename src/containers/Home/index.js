// import React from 'react';
// const React = require('react')
// module.exports = {
//   default: Home
// }
// 同构：同一套代码，在服务器端执行一次，再在客户端执行一次
import React from 'react'
const Home = () => {
  // return <div>home111x</div>
  return (
    <div>
      <div>this is Home</div>
      <button onClick={() => { alert('click') }}>click</button>
    </div>
  )
}
export default Home;

