const initialState = {
  list: [
    {
      id: 0,
      text: 'None',
      name: 'none',
      value: 'none'
    },
    {
      id: 1,
      text: 'Kettle Bell/Dumbbell',
      name: 'kb',
      value: 'kb/db'
    },
    {
      id: 2,
      text: 'Pull-Up Bar',
      name: 'pullUp',
      value: 'pull-up'
    },
    {
      id: 3,
      text: 'Sandbag/Bucket',
      name: 'sandbag',
      value: 'sandbag'
    },
    {
      id: 4,
      text: 'Barbell',
      name: 'barbell',
      value: 'barbell'
    },
    {
      id: 5,
      text: 'Box',
      name: 'box',
      value: 'box'
    }
  ]
}

function gear (state = initialState) {
  return initialState
}

export default gear
