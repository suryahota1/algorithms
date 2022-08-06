class Cookie {
    constructor(flavor) {
        console.log("called", flavor);
      this.flavor = flavor;
    }
  
    showTitle() {
      console.log(`The flavor of this cookie is ${this.flavor}.`);
    }
  }

class FavoriteCookie extends Cookie {
    constructor ( type ) {
        super(type);
    }
    showTitle() {
      super.showTitle();
      console.log(`${this.flavor} is amazing.`);
    }
}

let myCookie = new FavoriteCookie('chocolate');
  