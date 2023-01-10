export const testId = (selector: string) => `[data-testid="${selector}"]`

export const authEmailSelector = testId("email")
export const authPasswordSelector = testId("password")
export const authSubmitSelector = testId("submit")
