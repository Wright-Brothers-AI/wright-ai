
import { insertApiUsage } from './database';
// import dataset from './dataset.json';

// export type Dataset = (typeof dataset)[number];

type BaseLevels = "jurisdiction" | "subjurisdiction" | "corpus";
type AllowedLevels = "title" | "subtitle" | "code" | "part" | "subpart" | "division" | "subdivision" | "article" | "subarticle" | "chapter" | "subchapter" | "subject-group" | "section" | "appendix" | "hub"; // Extend as needed
const ALLOWED_LEVELS: AllowedLevels[] = ["title", "subtitle", "code", "part", "subpart", "division", "subdivision", "article", "subarticle", "chapter", "subchapter", "subject-group", "section", "appendix", "hub"];


export enum ContentType {
    Question = 'Question',
    Answer = 'Answer',
    Welcome = "Welcome",
    
}
export enum StreamingType {
    fake = "fake",
    real = "real",
    noStream = "noStream'"
}


export enum SpeakerType {
    wilbur="wilbur",
    orville="orville",
    user = "user"
}

export interface ContentBlock {
    blockId: string;
    type: ContentType;
    content: string;
    streamingType: StreamingType;
    speaker: SpeakerType;
}




// ### Completion Stuff ###
export type Message = {
    role: 'system' | 'user';
    content: string;
};


export interface APIParametersParams {
    vendor: string;
    model: string;
    messages: Message[];
    temperature?: number; // Optional with default value
    top_p?: number; // Optional with validation
    frequency_penalty?: number; // Optional with default value
    rag_tokens: number;
    max_tokens?: number; // Optional
    stream?: boolean; // Optional with default value
    response_format?: { [key: string]: any; }; // Optional
    presence_penalty?: number; // Optional with default value
    response_model?: any; // Optional, dynamic type
    max_retries?: number; // Optional with default value
    stop_sequences?: string[]; // Optional
    calling_function?: string; // Optional
}

export class APIParameters {
    vendor: string;
    model: string;
    messages: Message[];
    temperature: number = 1;
    top_p: number = 1;
    frequency_penalty: number = 0;
    rag_tokens: number;
    max_tokens?: number;
    stream: boolean = false;
    response_format?: { [key: string]: any; };
    presence_penalty: number = 0;
    response_model?: any;
    max_retries: number = 1;
    stop_sequences?: string[];
    calling_function?: string;

    constructor(params: APIParametersParams) {
        // Assign each parameter, applying default values and validation as needed
        this.vendor = params.vendor;
        this.model = params.model;
        this.messages = params.messages;
        this.temperature = Math.min(Math.max(params.temperature || 1, 0), 1);
        this.top_p = params.top_p !== undefined ? Math.min(Math.max(params.top_p, 0), 1) : 1;
        this.frequency_penalty = Math.min(Math.max(params.frequency_penalty || 0, 0), 1);
        this.rag_tokens = params.rag_tokens;
        this.max_tokens = params.max_tokens;
        this.stream = params.stream !== undefined ? params.stream : false;
        this.response_format = params.response_format;
        this.presence_penalty = Math.min(Math.max(params.presence_penalty || 0, 0), 1);
        this.response_model = params.response_model;
        this.max_retries = params.max_retries !== undefined ? params.max_retries : 1;
        this.stop_sequences = params.stop_sequences;
        this.calling_function = params.calling_function;
    }
}




// ##### Usage Stuff ######

export class APIUsage {
    response_id: string;
    session_id: string | null;
    calling_function: string;
    vendor: string;
    model: string;
    input_tokens: number | null;
    rag_tokens: number | null;
    output_tokens: number | null;
    total_tokens: number | null;
    input_cost: number | null;
    rag_cost: number | null;
    output_cost: number | null;
    total_cost: number | null;
    request_status: number;
    error_message: string | null;
    duration: number | null;
    api_key_name: string | null;
    timestamp: Date | null;

    constructor(
        response_id: string,
        calling_function: string,
        vendor: string,
        model: string,
        request_status: number,
        session_id: string | null = null,
        input_tokens: number | null = null,
        rag_tokens: number | null = null,
        output_tokens: number | null = null,
        total_tokens: number | null = null,
        input_cost: number | null = null,
        rag_cost: number | null = null,
        output_cost: number | null = null,
        total_cost: number | null = null,
        error_message: string | null = null,
        duration: number | null = null,
        api_key_name: string | null = null,
        timestamp: Date | null = null
    ) {
        this.response_id = response_id;
        this.session_id = session_id;
        this.calling_function = calling_function;
        this.vendor = vendor;
        this.model = model;
        this.input_tokens = input_tokens;
        this.rag_tokens = rag_tokens;
        this.output_tokens = output_tokens;
        this.total_tokens = total_tokens;
        this.input_cost = input_cost;
        this.rag_cost = rag_cost;
        this.output_cost = output_cost;
        this.total_cost = total_cost;
        this.request_status = request_status;
        this.error_message = error_message;
        this.duration = duration;
        this.api_key_name = api_key_name;
        this.timestamp = timestamp;
        this.computeCost();
    }

    // Method names should also follow the convention, if you're changing them
    updateStatus(request_status: number, error_message: string | null): void {
        this.request_status = request_status;
        this.error_message = error_message;
    }
    insert() {
        insertApiUsage(this);
    }
    computeCost(): void {
        // Implementation remains unchanged
        if (this.total_cost !== null) {
            return;
        }
        if (this.input_cost === null) {
            return;
        }

        let vendor = this.vendor.includes("instructor/") ? this.vendor.replace("instructor/", "") : this.vendor;
        let modelPricing;
        try {
            modelPricing = PRICING_DATA[vendor][this.model];
        } catch (error) {
            throw new Error(`Pricing data not found for model ${this.model} and vendor ${this.vendor}`);
        }

        this.input_cost = (this.input_tokens || 0) / 1e6 * parseFloat(modelPricing.input_price);
        this.rag_cost = (this.rag_tokens || 0) / 1e6 * parseFloat(modelPricing.input_price);
        this.output_cost = (this.output_tokens || 0) / 1e6 * parseFloat(modelPricing.output_price);
        this.total_cost = (this.input_cost || 0) + (this.output_cost || 0);
    }

    // Keep other methods unchanged in functionality but renamed to fit conventions.
}





export enum PhaseType {
    SQL_TRANSFER = "SQL_TRANSFER",
    API_REQUEST = "API_REQUEST",
    API_RESPONSE = "API_RESPONSE",
    TS_LOAD = "TS_LOAD",
    LLM_CALL = "LLM_CALL",
    TS_DUMP = "TS_DUMP"
}

interface PhaseReportParams {
    phase_type: PhaseType;
    timestamp: Date;
    description?: string;
    source_table?: string;
    ts_function?: string;
    api_route?: string;
    destination_table?: string;
    api_usage_id?: string;
    error_code?: number;
    error_message?: string;
}



export class PhaseReport {
    phase_type: PhaseType;
    timestamp: Date;
    description?: string;
    source_table?: string;
    ts_function?: string;
    api_route?: string;
    destination_table?: string;
    api_usage_id?: string;
    error_code?: number;
    error_message?: string;

    constructor(params: PhaseReportParams) {
        // Use object destructuring with default values for optional parameters
        this.phase_type = params.phase_type;
        this.timestamp = params.timestamp;
        this.description = params.description;
        this.source_table = params.source_table;
        this.ts_function = params.ts_function;
        this.api_route = params.api_route;
        this.destination_table = params.destination_table;
        this.api_usage_id = params.api_usage_id;
        this.error_code = params.error_code;
        this.error_message = params.error_message;
    }

    updateError(errorCode: number, errorMessage: string): void {
        this.error_code = errorCode;
        this.error_message = errorMessage;
    }
    static fromObject(obj: any): PhaseReport {
        // Convert the timestamp string back to a Date object if necessary
        const timestamp = obj.timestamp instanceof Date ? obj.timestamp : new Date(obj.timestamp);

        // Instantiate and return a new PhaseReport using the deserialized object
        return new PhaseReport({
            phase_type: obj.phase_type,
            timestamp: timestamp,
            description: obj.description,
            source_table: obj.source_table,
            ts_function: obj.ts_function,
            api_route: obj.api_route,
            destination_table: obj.destination_table,
            api_usage_id: obj.api_usage_id,
            error_code: obj.error_code,
            error_message: obj.error_message,
        });
    }
}






// Session ID
interface PipelineModelParams {
    session_id: string;
    history: PhaseReport[];
    queryScoring?: any; // Optional
    queryClarification?: any; // Optional
    queryRefinement?: any; // Optional
    queryExpansion?: any; // Optional
    similaritySearch?: any; // Optional
    directAnswering?: any; // Optional
    scoreFollowup?: any; // Optional
}

export class PipelineModel {
    session_id: string;
    history: PhaseReport[];
    queryScoring?: any;
    queryClarification?: any;
    queryRefinement?: any;
    queryExpansion?: any;
    similaritySearch?: any;
    directAnswering?: any;
    scoreFollowup?: any;

    constructor(params: PipelineModelParams) {
        this.session_id = params.session_id;
        this.history = params.history;
        this.queryScoring = params.queryScoring;
        this.queryClarification = params.queryClarification;
        this.queryRefinement = params.queryRefinement;
        this.queryExpansion = params.queryExpansion;
        this.similaritySearch = params.similaritySearch;
        this.directAnswering = params.directAnswering;
        this.scoreFollowup = params.scoreFollowup;
    };

    public addReport(report: PhaseReport) {
        this.history.push(report);
    };

    static fromObject(obj: any): PipelineModel {
        // Assuming PhaseReport also has a way to be initialized from a plain object
        const history = obj.history.map((report: any) => PhaseReport.fromObject(report));

        // Create the new PipelineModel with all properties, defaulting optional ones as necessary
        const model = new PipelineModel({
            session_id: obj.session_id,
            history: history,
            queryScoring: obj.queryScoring,
            queryClarification: obj.queryClarification,
            queryRefinement: obj.queryRefinement,
            queryExpansion: obj.queryExpansion,
            similaritySearch: obj.similaritySearch,
            directAnswering: obj.directAnswering,
            scoreFollowup: obj.scoreFollowup,
        });

        return model;
    }
}


const PRICING_DATA: { [vendor: string]: { [model: string]: { input_price: string, output_price: string, context_window?: number, RPM?: number, TPM?: number; }; }; } = {
    "anthropic": {
        "claude-3-opus-20240229": {
            "input_price": "15.00",
            "output_price": "75.00",
            "context_window": 200000,
            "RPM": 2000,
            "TPM": 100000
        },
        "claude-3-sonnet-20240229": {
            "input_price": "3.00",
            "output_price": "15.00",
            "context_window": 200000,
            "RPM": 2000,
            "TPM": 100000
        },
        "claude-3-haiku-20240307": {
            "input_price": "0.25",
            "output_price": "1.25",
            "context_window": 200000,
            "RPM": 2000,
            "TPM": 100000
        }
    },
    "openai": {
        "gpt-4-turbo-preview": {
            "input_price": "10.00",
            "output_price": "30.00",
            "TPM": 800000,
            "RPM": 10000,
            "context_window": 128000
        },
        "gpt-4-0125-preview": {
            "input_price": "10.00",
            "output_price": "30.00",
            "TPM": 800000,
            "RPM": 10000,
            "context_window": 128000
        },
        "gpt-4-1106-preview": {
            "input_price": "10.00",
            "output_price": "30.00",
            "TPM": 800000,
            "RPM": 10000,
            "context_window": 128000
        },
        "gpt-4-1106-vision-preview": {
            "input_price": "10.00",
            "output_price": "30.00",
            "TPM": 150000,
            "RPM": 300000
        },
        "gpt-4": {
            "input_price": "30.00",
            "output_price": "60.00",
            "TPM": 300000,
            "RPM": 10000,
            "context_window": 8192
        },
        "gpt-4-32k": {
            "input_price": "60.00",
            "output_price": "120.00"
        },
        "gpt-3.5-turbo": {
            "input_price": "0.50",
            "output_price": "1.50",
            "TPM": 1000000,
            "RPM": 10000,
            "context_window": 16385
        },
        "gpt-3.5-turbo-0125": {
            "input_price": "0.50",
            "output_price": "1.50",
            "TPM": 1000000,
            "RPM": 10000,
            "context_window": 16385
        },
        "gpt-3.5-turbo-1106": {
            "input_price": "1.00",
            "output_price": "2.00",
            "TPM": 1000000,
            "RPM": 10000,
            "context_window": 16385
        },
        "gpt-3.5-turbo-0301": {
            "input_price": "1.50",
            "output_price": "2.00",
            "TPM": 1000000,
            "RPM": 10000
        },
        "gpt-3.5-turbo-0613": {
            "input_price": "1.50",
            "output_price": "2.00",
            "TPM": 1000000,
            "RPM": 10000
        },
        "gpt-3.5-turbo-instruct": {
            "input_price": "1.50",
            "output_price": "2.00",
            "TPM": 90000,
            "RPM": 3500,
            "context_window": 4096
        },
        "gpt-3.5-turbo-16k": {
            "input_price": "3.00",
            "output_price": "4.00",
            "TPM": 1000000,
            "RPM": 10000,
            "context_window": 16385
        },
        "gpt-3.5-turbo-16k-0613": {
            "input_price": "3.00",
            "output_price": "4.00",
            "TPM": 1000000,
            "RPM": 10000,
            "context_window": 16385
        },
        "text-embedding-3-small": {
            "input_price": "0.02",
            "output_price": "",
            "TPM": 5000000,
            "RPM": 10000
        },
        "text-embedding-3-large": {
            "input_price": "0.13",
            "output_price": "",
            "TPM": 5000000,
            "RPM": 10000
        },
        "text-embedding-ada-002": {
            "input_price": "0.10",
            "output_price": "",
            "TPM": 5000000,
            "RPM": 10000
        },
        "davinci-002": {
            "input_price": "12.00",
            "output_price": "12.00",
            "TPM": 250000,
            "RPM": 3000,
            "context_window": 16384
        },
        "babbage-002": {
            "input_price": "1.60",
            "output_price": "1.60",
            "TPM": 250000,
            "RPM": 3000,
            "context_window": 16384
        }
    }
};


