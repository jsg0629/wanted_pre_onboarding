import React from 'react'

function Dropdown({tweets, filteringTweets}) {

    const userNameValues = []
    tweets.forEach((el) => {
      if (!userNameValues.includes(el.username)) {
        userNameValues.push(el.username)
      }
    })
    
  return (
    <div className="Feed__selectUser">
      <select
        onChange={(e) => {
          if (e.target.value === "All") {
            filteringTweets(tweets)
          } else {
            const filteredTweets = tweets.filter((el) => {
              return el.username === e.target.value
            })
            filteringTweets(filteredTweets)
          }
        }}
      >
        <option value="All">All</option>
        {userNameValues.map((el, i) => {
          return (
            <option key={i} value={el}>
              {el}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Dropdown
