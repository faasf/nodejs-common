import { DaprClient, CommunicationProtocolEnum } from '@dapr/dapr';

const secretStoreName = process.env.SECRET_STORE_NAME ?? 'secretstore';

export abstract class Secrets {
    public static async getSecret(key: string): Promise<string | null> {
        const client = new DaprClient(undefined, undefined, CommunicationProtocolEnum.GRPC);

        try {
            const secretData: any = await client.secret.get(secretStoreName, key);

            if (secretData?.[key]) {
                return secretData[key] as string;
            }
        } catch {
            return null;
        }


        return null;
    }
}
