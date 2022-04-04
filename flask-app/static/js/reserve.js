function try_to_make_reservation(event) {
  const url = "/reservation/add";
  const data = {
    'Email' : document.getElementById('email').value,
    'GroupID' : document.getElementById('groupid').value,
    'RoomID': document.getElementById('roomid').value,
    'StartTime': document.getElementById('starttime').value,
    'EndTime': document.getElementById('endtime').value
  };

  console.log(data);

  fetch(url, {
    "method": "POST",
    "mode" : "cors",
    "headers": {
        "Content-Type": "application/json; charset=UTF-8"
    },
    "body": JSON.stringify(data)
  })
  .then(function(response) {
    console.log(response.url);
    if (response.redirected) {
      window.location.href = response.url;
    }
  })
  .catch(err => {
    console.error(err.message);
  });

  return false;
}