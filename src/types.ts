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
) => void;
