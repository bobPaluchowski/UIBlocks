import React from 'react';
import UniversalForm from './UniversalForm'; // Adjust path as necessary

type InputType =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'checkbox'
  | 'select'
  | 'textarea'
  | 'date';

type FormField = {
  name: string;
  label: string;
  type: InputType;
  required?: boolean;
  options?: { label: string; value: string }[]; // For select fields
  placeholder?: string;
};

const fields: FormField[] = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'age', label: 'Age', type: 'number' },
  { name: 'bio', label: 'Bio', type: 'textarea' },
  { name: 'role', label: 'Role', type: 'select',
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'Editor', value: 'editor' },
      { label: 'Viewer', value: 'viewer' }
    ]},
  { name: 'subscribe', label: 'Subscribe', type: 'checkbox' },
];

function DemoForm() {
  const handleSubmit = (data: Record<string, any>) => {
    alert(JSON.stringify(data, null, 2));
  };

  return <UniversalForm fields={fields} onSubmit={handleSubmit} />;
}
