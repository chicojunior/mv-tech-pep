import {
  trigger,
  transition,
  style,
  animate,
  AnimationTriggerMetadata,
  state,
  group,
  query,
  animateChild,
} from '@angular/animations';

const defaultDuration = '120ms';
const defaultMinWidth = '50px';
const defaultMaxWidth = '2em';
const defaultMinFontSize = '20px';
const defaultMaxFontSize = '24px';

export function mainContentAnimation(
  animationDuration: string = defaultDuration,
  minWidth: string = defaultMinWidth,
  maxWidth: string = defaultMaxWidth
): AnimationTriggerMetadata {
  return trigger('onSideNavChange', [
    state(
      'closed',
      style({
        'margin-left': minWidth,
      })
    ),
    state(
      'open',
      style({
        'margin-left': maxWidth,
      })
    ),
    transition('closed => open', animate(`${animationDuration} ease-in`)),
    transition('open => closed', animate(`${animationDuration} ease-out`)),
  ]);
}

export function sidebarAnimation(
  animationDuration: string = defaultDuration,
  minWidth: string = defaultMinWidth,
  maxWidth: string = defaultMaxWidth
): AnimationTriggerMetadata {
  return trigger('onSideNavChange', [
    state(
      'closed',
      style({
        width: minWidth,
      })
    ),
    state(
      'open',
      style({
        width: maxWidth,
      })
    ),
    transition(
      'closed => open',
      group([
        query('@iconAnimation', animateChild()),
        query('@labelAnimation', animateChild()),
        animate(`${animationDuration} ease-in-out`),
      ])
    ),
    transition(
      'open => closed',
      group([
        query('@iconAnimation', animateChild()),
        query('@labelAnimation', animateChild()),
        animate(`${animationDuration} ease-in-out`),
      ])
    ),
  ]);
}

export function iconAnimation(
  animationDuration: string = defaultDuration,
  minFontSize: string = defaultMinFontSize,
  maxFontSize: string = defaultMaxFontSize
): AnimationTriggerMetadata {
  return trigger('iconAnimation', [
    state(
      'open',
      style({
        fontSize: maxFontSize,
      })
    ),
    state(
      'closed',
      style({
        fontSize: minFontSize,
      })
    ),
    transition('closed => open', animate(`${animationDuration} ease-in-out`)),
    transition('open => closed', animate(`${animationDuration} ease-in-out`)),
  ]);
}

export function labelAnimation(
  animationDuration: string = defaultDuration
): AnimationTriggerMetadata {
  return trigger('labelAnimation', [
    state(
      'open',
      style({
        display: 'inline',
        opacity: 1,
      })
    ),
    state(
      'closed',
      style({
        display: 'none',
        opacity: 0,
      })
    ),
    transition('closed => open', animate(`${animationDuration} ease-in-out`)),
    transition('open => closed', animate(`${animationDuration} ease-in-out`)),
  ]);
}
