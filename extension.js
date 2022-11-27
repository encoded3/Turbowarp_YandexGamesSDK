class YandexSDKExtension {
    getInfo() {
      return {
        id: 'strictequalityexample', // change this if you make an actual extension!
        name: 'Strict Equality',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: Scratch.BlockType.COMMAND,
            text: 'ShowFullscreenAd',
          }
        ]
      };
    }
    strictlyEquals() {
        document.YaGames.init().then(ysdk => ysdk.adv.showFullscreenAdv())
    }
  }
  Scratch.extensions.register(new YandexSDKExtension());