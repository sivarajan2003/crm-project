import { Modal, Input, Form, Button, Switch } from "antd";

export default function AddLeads({ open, onClose, onSave }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onSave({
        key: Date.now(),
        ...values
      });
      form.resetFields();
    });
  };

  return (
    <Modal
      title="Add New Lead"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={500}
    >
      <Form form={form} layout="vertical">

        <Form.Item label="Lead Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Company" name="company" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Value" name="value">
          <Input placeholder="₹ Amount"/>
        </Form.Item>

        <Form.Item label="Assigned To" name="assigned">
          <Input />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Switch defaultChecked />
        </Form.Item>

        <Button
          type="primary"
          block
          style={{ marginTop: 10 }}
          onClick={handleSubmit}
        >
          Save Lead
        </Button>

      </Form>
    </Modal>
  );
}