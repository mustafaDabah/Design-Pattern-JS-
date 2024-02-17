class User {
    #password;
    constructor(name, userName, password) {
      this.name = name;
      this.userName = userName;
      this.#password = password;
    }
  
    login(userName, password) {
      if (userName === this.userName && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    setPassword(newPassword) {
      this.#password = newPassword;
    }

    getterPassword() {
        return this.#password
    }
  };
  
  const nehal = new User('Nehal Mahida', 'nehal_mahida', 'password:)');
  const js = new User('JavaScript', 'js', 'python:)');
  
  
  nehal.login('nehal_mahida', 'password:)'); // Login Successfully
  js.login('js', 'python:)'); // Login Successfully
  
  console.log(nehal.name); // Nehal Mahida
  console.log(nehal.password); // undefined
//   console.log(nehal.#password); // Syntax Error
  
  nehal.setPassword('new_password:)');
  nehal.login('nehal_mahida', 'password:)'); // Authentication Failed!!
  nehal.login('nehal_mahida', 'new_password:)'); // Login Successfully

  console.log(nehal.getterPassword())

  // ############################################

  class UserTwo {
    name;
    email;
    #password;
    constructor() {}
  
    #validateEmail(email) {
      // check email is valid or not.
      return true;
    }
  
    #validatePassword(password) {
      // check password is satisfying the minimum requirements or not.
      return true;
    }
  
    signUp(name, email, password) {
      let isValidated = false;
      isValidated = this.#validateEmail(email);
      isValidated &&= this.#validatePassword(password);
  
      if (isValidated) {
        this.name = name;
        this.email = email;
        this.#password = password;
        // add user in your db.
        console.log('User registered successfuly');
      } else {
        console.log('Please enter correct Details!!');
      }
    }
  
    login(email, password) {
      if (email === this.email && password === this.#password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    #isRegisteredUser(email) {
      // check user is registered or not.
      return true;
    }
  
    resetPassword(email, newPassword) {
      if (this.#isRegisteredUser(email)) {
          this.#password = newPassword;
          console.log('Operation performed successfully');
      }
      else {
        console.log('No account found!');
      }
    }
  };
  
  const nehalTwo = new User();
  nehalTwo.signUp('Nehal Mahida', 'nm@gmail.com', 'password:)'); // User registered successfuly
  
  nehalTwo.#validateEmail('nm@gmail.com'); // Syntax Error.
  
  nehalTwo.login('nm@gmail.com', 'password:)'); // Login Successfully
  nehalTwo.resetPassword('nm@gmail.com', ''); // Operation performed successfully

  function Circle(radius) {
    this.radius = radius;

    // this.defaultLocation = {x: 0 , y:0}
    let defaultLocation = {x: 0 , y:0}

    // this.computeOptimalLocation = function(factor) {

    // }
    let computeOptimalLocation = function(factor) {

    }

    this.draw = function() {
      computeOptimalLocation(0.2);

      console.log('draw ')
    }

    Object.defineProperty(this , 'defaultLocation' , {
      get: function() {
        return defaultLocation;
      },
      set: function(value) {
        if(!value.x || !value.y) throw new Error('invalid location')

        defaultLocation = value
      }
    })

  }

  const circle = new Circle(10);
  console.log(circle.defaultLocation)
  circle.draw();

  
   

  // #############################
  
  class UserThree {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    login(email, password) {
      if (email === this.email && password === this.password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  }
  
  class Author extends UserThree {
    #numOfPost;
  
    constructor(email, password) {
      super(email, password);
      this.#numOfPost = 0;
    }
  
    createPost(content) {
      // add content to your DB. :)
      this.#numOfPost++;
    }
  
    getNumOfPost() {
      return this.#numOfPost;
    }
  }
  
  class Admin extends UserThree {
    constructor(email, password) {
      super(email, password);
    }
  
    login(email, password) {
      // add extra layer of security as this is an admin account.
      const isValidAdmin = true; // we can have some 2FA type security check here.
      if (email === this.email && password === this.password && isValidAdmin) {
        console.log('Admin Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    removeUser(userId) {
      // remove this userId from your DB.
      console.log('User Removed successfully.');
    }
  }
  
  const nehalThree = new Author('nm@gmail.com', 'password:)');
  nehalThree.login('nm@gmail.com', 'password:)'); // Login Successfully
  
  const json = new Admin('jason@gmail.com', '[Object] [object]');
  json.login('jason@gmail.com', '[Object] [object]'); // Admin Login Successfully