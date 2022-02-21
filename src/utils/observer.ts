class Observable {
  private observers: Function[]
  constructor () {
    this.observers = []
  }

  subscribe (fun: Function) {
    this.observers.push(fun)
  }
  
  unsubscribe(fun: Function) {
    this.observers = this.observers.filter((val: Function) => val !== fun) 
  }

  notify(data: any) {
    this.observers.forEach((val: Function) => val(data))
  }
}


function logger (data: string) {
  console.log(data)
}

const observer = new Observable()

observer.subscribe(logger)


function trigger () {
  observer.notify('trigger')
}

trigger()



