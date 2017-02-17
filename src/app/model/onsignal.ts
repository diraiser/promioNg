export class OnesignalForm {
    constructor(
        public name: string,
        public apiKey: string,
        public appId: string,
        public userAuthKey?: string
    ) {  }
}