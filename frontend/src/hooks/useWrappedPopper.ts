import { useState } from 'react';
import { PopperProps, usePopper, Modifier, StrictModifier, StrictModifierNames } from 'react-popper';
import * as PopperJS from '@popperjs/core';

type PopperOptions<Modifiers> = Omit<Partial<PopperJS.Options>, 'modifiers'> & {
  createPopper?: typeof PopperJS.createPopper;
  modifiers?: ReadonlyArray<Modifier<Modifiers>>;
};

export const useWrappedPopper = (options: PopperOptions<StrictModifierNames>) => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const popper = usePopper(referenceElement, popperElement, options);

  return {
    popper,
    setReferenceElement,
    setPopperElement,
    arrowElement,
    setArrowElement
  };
};
