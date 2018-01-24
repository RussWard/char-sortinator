class charSortinator {
  constructor() {
    this.history = [];
    this.submit = this.submit.bind(this);
    this.showHistory = this.showHistory.bind(this);
  }

  showHistory() {
    let list = this.history.map(string => `<div>${string}</div>`)
    document.getElementById('history').innerHTML = list;
  }

  submit(string) {
    let body = { string }
    console.log(JSON.stringify(string));
    fetch('/sort', {
      method: 'POST',
      body: JSON.stringify(body),
      mode: 'cors',
      headers: new Headers({
        'Content-Type' : 'application/json'
      })
    }).then(response => { return response.json() })
    .then(data => {
      this.history.push(data)
    })
    .then(() => this.showHistory())
    .catch(err => console.log(err))
  }
}

let sortinator = new charSortinator();