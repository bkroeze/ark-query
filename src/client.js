import rest from 'rest';
import errorCode from 'rest/interceptor/errorCode';
import mime from 'rest/interceptor/mime';
import pathPrefix from 'rest/interceptor/pathPrefix';
import defaultRequest from 'rest/interceptor/defaultRequest';

var networks = {
  devnet: {
    name: "devnet",
    nethash: "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
    slip44: 1,
    version: 30,
    peers: [
      "167.114.29.52:4002",
      "167.114.29.53:4002",
      "167.114.29.54:4002",
      "167.114.29.55:4002"
    ]
  },
  mainnet: {
    name: "mainnet",
    slip44: 111,
    nethash: "6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988",
    version: 23,
    peers: [
      "5.39.9.240:4001",
      "5.39.9.241:4001",
      "5.39.9.242:4001",
      "5.39.9.243:4001",
      "5.39.9.244:4001",
      "5.39.9.250:4001",
      "5.39.9.251:4001",
      "5.39.9.252:4001",
      "5.39.9.253:4001",
      "5.39.9.254:4001",
      "5.39.9.255:4001",
      "193.70.72.90:4001"
    ]
  }
};

/**
 * ARK client
 * @param {boolean} main true if mainnet
 * @type {Object}
 */
export default class Client {
  constructor(main) {
    this.network = main ? networks.mainnet : networks.devnet;
    this.peer = null;
  }

  /**
   * Lazy-get the current peer.
   * @param  {boolean} force true to force the peer to a new one
   * @return {String} peer address
   */
  getCurrentPeer(force) {
    if (force || !this.peer) {
        this.peer = this.network.peers[Math.floor(Math.random() * 1000) % this.network.peers.length]
    }
    return this.peer;
  }

  /**
   * Call the server with the specified options;
   * @param {Object} options for rest call
   * @return {Object} rest client
   */
  callServer (options) {
    const peer = this.getCurrentPeer();
    const headers = {
      nethash: this.network.nethash,
      version: '2.0.0',
      port: 1
    };
    return rest
      .wrap(pathPrefix, { prefix: `http://${peer}` })
      .wrap(mime, { mime: 'application/json' })
      .wrap(defaultRequest, { method: 'GET', headers })
      .wrap(errorCode)(options);
  }

  get(url) {
    return this.callServer({path: url})
      .catch(e => {
        console.log('Error', e);
        this.getCurrentPeer(true);
        return Promise.reject(e);
      });
  }

  getBalance(account) {
    return this.get(`/api/accounts?address=${account}`);
  }

}
