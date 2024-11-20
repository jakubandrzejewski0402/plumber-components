import { JsonViewEditorProps } from '@uiw/react-json-view/editor';

export interface JsonViewerProps<T extends object>
  extends JsonViewEditorProps<T> {
  onObjectChange?: (value: T) => void;
}

export interface RenderValueProps {
  value?: unknown;
  type: string;
  namespace?: Array<string | number>;
}

export type RenderValue = (props: RenderValueProps) => JSX.Element;
