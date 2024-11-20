import { forwardRef, useCallback } from 'react';
import { JsonViewerProps, RenderValueProps } from './JsonViewer.types';
import JsonView from '@uiw/react-json-view/editor';
import { darkTheme } from '@uiw/react-json-view/dark';
import { MuiColorInput } from 'mui-color-input';
import {
  copyObject,
  deleteObjectValue,
  isColor,
  updateObjectValue,
} from './jsonViewerHelpers';

const JsonViewer = forwardRef<HTMLDivElement, JsonViewerProps<object>>(
  (
    { value, components, onEdit, onAdd, onDelete, onObjectChange, ...rest },
    ref,
  ) => {
    const object = value || {};

    const handleValueUpdate = (
      newValue: unknown,
      namespace?: Array<string | number>,
    ) =>
      useCallback(() => {
        const copy = copyObject(object);
        updateObjectValue(copy, newValue, namespace);
        onObjectChange?.(copy);
      }, [onObjectChange, object]);

    const handleEdit = useCallback(
      (option: {
        value: unknown;
        oldValue: unknown;
        keyName?: string | number;
        parentName?: string | number;
        namespace?: Array<string | number>;
        type?: 'value' | 'key';
      }) => {
        onEdit?.(option);
        const copy = copyObject(object);
        updateObjectValue(copy, option.value, option.namespace);
        onObjectChange?.(copy);
      },
      [onEdit, onObjectChange, object],
    );

    const handleAdd = useCallback(
      (keyOrValue: string, newValue: object, value: object, isAdd: boolean) => {
        const result = onAdd?.(keyOrValue, newValue, value, isAdd);

        return result ?? true;
      },
      [onAdd, onObjectChange, object],
    );

    const handleDelete = useCallback(
      (
        keyName: string | number,
        value: object,
        parentValue: object | null,
        opt: {
          namespace?: Array<string | number>;
        },
      ) => {
        const result = onDelete?.(keyName, value, parentValue, opt);

        if (result && onObjectChange) {
          const copy = copyObject(object);
          deleteObjectValue(copy, opt.namespace);
          onObjectChange(copy);
        }

        return result ?? true;
      },
      [onDelete, onObjectChange, object],
    );

    const ColorValue = ({ value, namespace }: RenderValueProps) =>
      useCallback(() => {
        const color = `${value}`;

        if (isColor(color)) {
          return (
            <MuiColorInput
              format="hex"
              value={color}
              onChange={(v) => handleValueUpdate(v, namespace)}
            />
          );
        }
      }, []);

    return (
      <JsonView
        ref={ref}
        style={darkTheme}
        value={object}
        displayDataTypes={false}
        displayObjectSize={false}
        onEdit={onEdit ? handleEdit : undefined}
        onAdd={onAdd ? handleAdd : undefined}
        onDelete={onDelete ? handleDelete : undefined}
        components={{
          ...components,
          value: ColorValue as any,
        }}
        {...rest}
      />
    );
  },
);

export default JsonViewer;
