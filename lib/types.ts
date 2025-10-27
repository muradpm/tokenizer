// Define the API model interface based on the route response
export interface APIModel {
	id: string;
	model_id: string;
	name: string;
	provider: string;
	provider_id: string;
	tool_call: boolean;
	reasoning: boolean;
	attachment: boolean;
	temperature: boolean;
	knowledge?: string;
	release_date?: string;
	last_updated?: string;
	open_weights?: boolean;
	cost?: {
		input: number;
		output: number;
		cache_read?: number;
		cache_write?: number;
	};
	limit?: {
		context?: number;
		output?: number;
	};
	modalities?: {
		input: string[];
		output: string[];
	};
	_raw: any;
}

export interface ModelData {
	name?: string;
	tool_call?: boolean;
	reasoning?: boolean;
	attachment?: boolean;
	temperature?: boolean;
	knowledge?: string;
	release_date?: string;
	last_updated?: string;
	open_weights?: boolean;
	cost?: {
		input: number;
		output: number;
		cache_read?: number;
		cache_write?: number;
	};
	limit?: {
		context: number;
		output: number;
	};
	modalities?: {
		input: string[];
		output: string[];
	};
}

export interface Provider {
	id: string;
	name: string;
}

export interface ProviderData {
	name?: string;
	models: Record<string, ModelData>;
}
