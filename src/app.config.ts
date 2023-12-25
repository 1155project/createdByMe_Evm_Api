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

    public localAssetCreatorFactoryAddress = process.env.LOCAL_ASSET_CREATOR_FACTORY_ADDRESS ?? '';
    public testAssetCreatorFactoryAddress = process.env.TEST_ASSET_CREATOR_FACTORY_ADDRESS ?? '';
    public prodAssetCreatorFactoryAddress = process.env.PROD_ASSET_CREATOR_FACTORY_ADDRESS ?? '';
    public localCreatorNameServiceAddress = process.env.LOCAL_CREATOR_NAME_SERVICE_ADDRESS ?? '';
    public testCreatorNameServiceAddress = process.env.TEST_CREATOR_NAME_SERVICE_ADDRESS ?? '';
    public prodCreatorNameServiceAddress = process.env.PROD_CREATOR_NAME_SERVICE_ADDRESS ?? '';

    public envSpecific = this.buildEnvironmentConfig();

    buildEnvironmentConfig () {
        return {
            nodeUrl: this.environment === 'LOCAL' ? this.localRpcNodeUrl :
                     this.environment === 'TEST' ? this.testRpcNodeUrl :
                     this.prodRpcNodeUrl,
            walletSecret: this.environment === 'LOCAL' ? this.localWalletSecret :
                    this.environment === 'TEST' ? this.testWalletSecret :
                    this.prodWalletSecret,
            assetCreatorFactoryAddress: this.environment === 'LOCAL' ? this.localAssetCreatorFactoryAddress :
                    this.environment === 'TEST' ? this.testAssetCreatorFactoryAddress :
                    this.prodAssetCreatorFactoryAddress,
            creatorNameServiceAddress: this.environment === 'LOCAL' ? this.localCreatorNameServiceAddress :
                    this.environment === 'TEST' ? this.testCreatorNameServiceAddress :
                    this.prodCreatorNameServiceAddress,
        }
    }
}

export const APP_CONFIG = new AppConfig();