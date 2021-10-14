const { Plugin } = require(`powercord/entities`)
//'"' + items[Math.floor(Math.random()*items.length)] + '" -Ross'


function generate_num (min, max) {
	return Math.floor(Math.random() * (max - min + 1) - min) 
}

module.exports = class RandomNumber extends Plugin {
  constructor() {
    super();

  }
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: `number`,
      description: `Get a random number between 0 and 1000.`,
      usage: `{prefix}number`,
      executor: _ => {
        return {
          send: true,
          result: generate_num(0, 1000)
        }
      }
    });
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand(`number`);
  }

}	