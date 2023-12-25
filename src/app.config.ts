import * as dotenv from 'dotenv'
dotenv.config();

class AppConfig {
    public environment = process.env.ENVIRONMENT ?? 'LOCAL';
    public localRpcNodeUrl = process.env.LOCAL_RPC_NODE_URL ?? '';
    public localWalletSecret = process.env.LOCAL_WALLET_SECRET ?? '';
    public testRpcNodeUrl = process.env.TEST_RPC_NODE_URL ?? '';
    public testWalletSecret = process.env.TEST_WALLET_SECRET ?? '';
    public prodRpcNodeUrl = process.env.PROD_RPC_NODE_URL ?? '';
    public prodWalletSecret = process.env.PROD_WALLET_SECRET ?? '';
    public envSpecific = this.buildEnvironmentConfig();

    buildEnvironmentConfig () {
        return {
            nodeUrl: this.environment === 'LOCAL' ? this.localRpcNodeUrl :
                     this.environment === 'TEST' ? this.testRpcNodeUrl :
                     this.prodRpcNodeUrl,
            walletSecret: this.environment === 'LOCAL' ? this.localWalletSecret :
                    this.environment === 'TEST' ? this.testWalletSecret :
                    this.prodWalletSecret,
        }
    }
}

export const APP_CONFIG = new AppConfig();