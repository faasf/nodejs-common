import { DaprClient, CommunicationProtocolEnum } from '@dapr/dapr';

const secretStoreName = process.env.SECRET_STORE_NAME ?? 'secretstore';

export abstract class Secrets {
    public static async getSecret(name: string, key?: string): Promise<string | null> {
        const client = new DaprClient(undefined, undefined, CommunicationProtocolEnum.GRPC);

        if (!key) {
            key = name;
        }

        try {
            const secretData: any = await client.secret.get(secretStoreName, name);

            if (secretData?.[key]) {
                return secretData[key] as string;
            }
        } catch {
            return null;
        }


        return null;
    }
}
