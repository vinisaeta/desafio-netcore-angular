export enum ValidationType {
    Required = 'required',
    MinLength = 'minlength',
    MaxLength = 'maxlength',
    Email = 'email'
}

export enum ValidationMessage {
    required = 'This is required',
    minlength = 'Must be longer than {0} characters',
    maxlength = 'Must be less than {0} characters',
    email = ''
}
