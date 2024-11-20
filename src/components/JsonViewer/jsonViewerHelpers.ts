const isColor = (value: unknown) => {
  const color = `${value}`;
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

const copyObject = (root: object) => {
  return JSON.parse(JSON.stringify(root));
};

const updateObjectValue = (
  root: Record<string, any>,
  value: unknown,
  namespace?: Array<string | number>,
) => {
  if (!namespace) return root;

  try {
    let current = root;
    for (let i = 0; i < namespace.length - 1; i++) {
      current = current[namespace[i]];
    }
    current[namespace[namespace.length - 1]] = value;
  } catch (err: any) {
    console.error(`Error updating ${namespace.join('.')}: ${err.message}`);
  }

  return root;
};

const deleteObjectValue = (
  root: Record<string, any>,
  namespace?: Array<string | number>,
) => {
  if (!namespace) return root;

  try {
    let current = root;
    for (let i = 0; i < namespace.length - 1; i++) {
      current = current[namespace[i]];
    }
    const key = namespace[namespace.length - 1];
    if (Array.isArray(current)) {
      current.splice(key as number, 1);
    } else {
      delete current[key];
    }
  } catch (err: any) {
    console.error(`Error deleting ${namespace.join('.')}: ${err.message}`);
  }

  return root;
};

const replaceObjectValue = (
  root: Record<string, any>,
  value: Record<string, any>,
  newValue: Record<string, any>,
): Record<string, any> => {
  const replace = (current: Record<string, any>): Record<string, any> => {
    if (current === value) {
      return newValue;
    }

    for (const key in current) {
      if (typeof current[key] === 'object' && current[key] !== null) {
        current[key] = replace(current[key]);
      }
    }

    return current;
  };

  return replace(root);
};

export {
  isColor,
  copyObject,
  updateObjectValue,
  deleteObjectValue,
  replaceObjectValue,
};
