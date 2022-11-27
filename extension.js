class YandexSDKExtension {
    getInfo() {
      return {
        id: 'yandexgamessdkforturbowarp', // change this if you make an actual extension!
        name: 'Yandex Games SDK',
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
