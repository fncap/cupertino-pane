export interface PaneBreak {
    enabled: boolean;
    height?: number;
    bounce?: boolean;
}
export interface PaneBreaks {
    top?: PaneBreak;
    middle?: PaneBreak;
    bottom?: PaneBreak;
}
export interface ZStackSettings {
    pushElements: string[];
    minPushHeight?: number;
    cardYOffset?: number;
    cardZScale?: number;
    cardContrast?: number;
    stackZAngle?: number;
}
export interface TransitionStartEvent {
    translateY: {
        new: number;
    };
}
export interface PaneSettings {
    initialBreak: ('top' | 'middle' | 'bottom');
    inverse: boolean;
    parentElement: any;
    followerElement: string;
    followerStopAtMiddle: boolean;
    cssClass: string;
    fitHeight: boolean;
    maxFitHeight: number;
    fitScreenHeight: boolean;
    backdrop: boolean;
    backdropOpacity: number;
    animationType: string;
    animationDuration: number;
    bottomOffset: number;
    bottomClose: boolean;
    fastSwipeClose: boolean;
    fastSwipeSensivity: number;
    freeMode: boolean;
    buttonDestroy: boolean;
    buttonClose: boolean;
    topperOverflow: boolean;
    topperOverflowOffset: number;
    lowerThanBottom: boolean;
    upperThanTop: boolean;
    showDraggable: boolean;
    draggableOver: boolean;
    clickBottomOpen: boolean;
    dragBy: string[];
    preventClicks: boolean;
    handleKeyboard: boolean;
    simulateTouch: boolean;
    passiveListeners: boolean;
    touchMoveStopPropagation: boolean;
    touchAngle: number;
    breaks: PaneBreaks;
    zStack: ZStackSettings;
    onDidDismiss: (event?: CustomEvent) => void;
    onWillDismiss: (event?: CustomEvent) => void;
    onDidPresent: (event?: CustomEvent) => void;
    onWillPresent: (event?: CustomEvent) => void;
    onDragStart: (event?: CustomEvent) => void;
    onDrag: (event?: any) => void;
    onDragEnd: (event?: CustomEvent) => void;
    onBackdropTap: (event?: CustomEvent) => void;
    onTransitionStart: (event?: TransitionStartEvent) => void;
    onTransitionEnd: (event?: any) => void;
}
