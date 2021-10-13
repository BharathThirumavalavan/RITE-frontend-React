let getCoordinates = {}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

function showPosition(position) {
  getCoordinates = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  }
}

export async function addUser(mobileNo) {
  let loginStatus = null
  getLocation()
  const user = await fetch('/login/success', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      phoneNumber: `+91${mobileNo}`,
      location: getCoordinates,
    }),
  })
  await user.json().then((data) => {
    loginStatus = data.loginStatus
  })
  if (loginStatus) {
    console.log('login success added to db')
    return { status: true, msg: 'Login Successful' }
  } else {
    console.log('login failed not added to db')
    return { status: false, msg: 'Unable to login' }
  }
}
