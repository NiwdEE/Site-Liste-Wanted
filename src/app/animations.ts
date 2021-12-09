import { trigger, style, animate, transition, animateChild, query, group } from '@angular/animations';



export const slideInAnimation =
  trigger('mainRouteAnimations', [
    transition('1=>2, 1=>3, 1=>4, 1=>5, 1=>6, 2=>3, 2=>4, 2=>5, 2=>6, 3=>4, 3=>5, 3=>6, 4=>5, 4=>6, 5=>6', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            // display: 'block',
            top: 0,
            left: 0,
            width: '100%',
            height:'100%',
            '-webkit-backface-visibility': 'hidden'
          })
        ]),
        query(':enter', [
          style({ left: '100%' })
        ]),
        group([
          query(':leave', [
            animate('300ms ease-in-out', style({ left: '-100%' }))
          ]),
          query(':enter', [ 
            animate('300ms ease-in-out', style({ left: '0%' }))
          ]),
          // query(':leave *', [ // Force nested routes to animate to not let them disappear
          //   style({}),
          //   animate(1, style({}))
          // ], {optional: true})
        ]),
      ]),
    transition('4=>3, 4=>2, 4=>1, 3=>2, 3=>1, 2=>1, 5=>4, 5=>3, 5=>2, 5=>1, 6=>5, 6=>4, 6=>3, 6=>2, 6=>1', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height:'100%',
          '-webkit-backface-visibility': 'hidden'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      group([
        query(':leave', [
          animate('300ms ease-in-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-in-out', style({ left: '0%' }))
        ])
      ]),
      query(':leave *', [ // Force nested routes to animate to not let them disappear
        style({}),
        animate(1, style({}))
      ], {optional: true})
    ]),
    transition('fade <=> *, 5 <=> 5',[
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height:'100%',
          opacity: 1
        })
      ]), 
      query(':enter', [
        style({ opacity: 0, "z-index": 1 })
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave',[
          animate('1000ms ease-out', style({ opacity: 0 }))
        ], {optional: true}),
        query(':enter',[
          animate('1000ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
      query(':leave *', [ // Force nested routes to animate to not let them disappear
        style({}),
        animate(1, style({}))
      ], {optional: true})
    ])
  ]);



export const AuthRouteAnimation = trigger('authRouteAnimations',[
  transition('1 => 2, 2 => 3, 1 => 3',[
    style({position: 'relative'}),
    query(':enter, :leave', style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height:'100%',
      // 'z-index':-1
    })),
    query(':enter', style({
      transform: 'TranslateY(100%)'
    })),
    // query(':enter', animateChild()),
    group([
      query(':leave', animate('300ms',
        style({transform: 'TranslateY(-100%'})
      )),
      query(':enter', animate('300ms',
        style({transform: 'TranslateY(0%)'})
      ))
    ])
  ]),
  transition('3 => 2, 3 => 1, 2 => 1',[
    style({position: 'relative'}),
    query(':enter, :leave', style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height:'100%',
      // 'z-index': -1
    })),
    query(':enter', style({
      transform: 'TranslateY(-100%)'
    })),
    group([
      query(':leave', animate('300ms',
        style({transform: 'TranslateY(100%)'})
      )),
      query(':enter', animate('300ms',
        style({transform: 'TranslateY(0%)'})
      ))
    ])
  ])
]);