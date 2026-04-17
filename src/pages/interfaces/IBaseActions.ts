/**
 *  We define only the necessary actions
*   to interact with elements, avoiding "bulky" interfaces.
 */
export interface IBaseActions {
  navigateTo(url: string): Promise<void>;
  clickElement(selector: string): Promise<void>;
  typeText(selector: string, text: string): Promise<void>;
  getText(selector: string): Promise<string | null>;
}
