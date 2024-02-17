// Examples
// * Logging function - Don't want a new instance of the logger for every log
// * Global config - Config should come from a single source of truth
// * Database connections - Many instances can increase memory usage


class SingletonSettings {
  constructor() {
    if (SingletonSettings.instance instanceof SingletonSettings) {
      return SingletonSettings.instance;
    }

    this.settings = {
      fontSize: "20px",
      color: "#080",
      background: "#fff",
      version: Math.floor(Math.random() * 1000),
    };

    Object.freeze(this.settings);
    Object.freeze(this);
    SingletonSettings.instance = this;
  }

  get(key) {
    return this.settings[key];
  }
}

// const firstVersion = new SingletonSettings();
// const twoVersion = new SingletonSettings();
// firstVersion.settings.fontSize = '10px'
// firstVersion.delete = () => {}

// console.log(firstVersion)
// console.log(twoVersion)

// >>>> config example
let config = (function () {
  let instance;

  function SingletonClass() {
    const props = {
      fontSize: "20px",
      color: "#080",
      background: "#fff",
      version: Math.floor(Math.random() * 1000),
      get(prop) {
        return props[prop];
      },
      set(prop, value) {
        return (props[prop] = value);
      },
      has(prop) {
        return props[prop] !== null && props[prop] !== undefined;
      },
    };

    Object.freeze(props)
    return props;
  }

  return {
    getInstance() {
      if (instance == null) {
        console.log("instance");
        instance = new SingletonClass();
      }

      return instance;
    },
  };
})();

const configOne = config.getInstance();
const configTwo = config.getInstance();

configOne.fontSizeTwo = '10px';

console.log(configOne.get("version"));
console.log(configOne);
console.log(configTwo.get("version"));

// console.log(configTwo.get('version'));






