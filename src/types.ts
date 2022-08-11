export type IsPollingType = (navigator: Navigator) => boolean;

export interface IPingArgs {
  url: string;
  timeout: number;
}

export interface IPollingConfig {
  enabled?: boolean;
  url?: string;
  timeout?: number;
  interval?: number;
}

export type UseOnlineEffectType = (
  pollingOptions?: IPollingConfig | boolean
) => { isOnline: boolean };

export type TEffectiveType = "slow-2g" | "2g" | "3g" | "4g";
export interface INetworkInformation extends NetworkInformation {
  readonly effectiveType: TEffectiveType;
}

export interface INetworkStatus {
  supported: boolean;
  effectiveConnectionType: TEffectiveType;
}
