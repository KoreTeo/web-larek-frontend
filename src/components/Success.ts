import { Component } from './base/component';
import { ensureElement } from '../utils/utils';

interface ISuccess {
    total: number;
}

interface ISuccessActions {
    onClick: () => void;
}

export class Success extends Component<ISuccess> {
    protected _close: HTMLElement;
    protected _description: HTMLElement;

    constructor(container: HTMLElement, actions: ISuccessActions) {
        super(container);


        this._close = ensureElement('.order-success__close', this.container);
        this._description = ensureElement('.order-success__description', this.container);

        if (actions?.onClick) {
            this._close.addEventListener('click', actions.onClick);
        }
    }
    get description(): string {
        return this._description.textContent;
    }
    set description(value: string) {
        this._description.textContent = `Списано ${value} синапсов`;
    }
}