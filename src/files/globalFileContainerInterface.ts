import { RequestType } from "vscode-languageclient";
import * as fileCommon from "./common";
import { SettingsExport } from "../common/settings";

export namespace Request {
    export const type: RequestType<RequestParams, RequestResult, RequestError> = { get method() { return "request"; } };
}

/**
 * The Request parameters
 */
export interface RequestParams {
    /**
     * The process Id of the parent process that started
     * the server.
     */
    processId: number;

    /**
     * The type of request event to handle.
     */
    requestEventType: RequestEventType;

    package?: RequestPackage;
}

/**
 * The result returned from an initilize request.
 */
export interface RequestResult {
    succesful: boolean;

    message?: string;

    package?: RequestPackage;
}

export type RequestPackage = fileCommon.BasciFileQuickPick |
    fileCommon.BasciFileQuickPick[] |
    fileCommon.IUpdateResult |
    fileCommon.IUpdateResult[] |
    fileCommon.IFile |
    fileCommon.IFile[] |
    SettingsExport;


/**
 * The error returned if the initilize request fails.
 */
export interface RequestError {
    /**
     * Indicates whether the client should retry to send the
     * initilize request after showing the message provided
     * in the {@link ResponseError}
     */
    retry: boolean;
}

export enum RequestEventType {
    UPDATE,
    DESCRIPTORSALL,
    SETTINGS
}
