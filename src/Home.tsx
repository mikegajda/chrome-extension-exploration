import React, { useEffect, useState } from 'react'

function getUrl(){
  return document.getElementById("url").textContent
}

function getCurrentTabUrl(callback) {
  let queryInfo = {
    active: true,
    currentWindow: true
  };

  try {
    chrome.tabs.query(queryInfo, function (tabs) {
      let tab = tabs[0];
      let url = tab.url;
      callback(url)
    });
  }
  catch {
    callback("localhost:8000")
  }

}

export function Home () {
  let [url, setUrl] = useState("")
  useEffect(() => {
    getCurrentTabUrl(setUrl)
  }, [])

  return (
    <div>
      <h3>Current Url</h3>
      <div>{url}</div>
      <a href={url} target={"_blank"} className={'btn btn-secondary'}>Go to</a>
      <button className={"btn btn-primary"}>Get Info</button>
    </div>
  )
}
