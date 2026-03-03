import { Modal, Form, Input, Button, Switch } from "antd";

export default function AddLeads({ open, onClose, onSave }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onSave({
      key: Date.now(),
      ...values,
    });
    form.resetFields();
  };

  return (
    <Modal
      title="Add New Lead"
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <Form layout="vertical" form={form} onFinish={handleFinish}>

        <Form.Item
          name="name"
          label="Lead Name"
          rules={[{ required: true, message: "Enter Lead Name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="company"
          label="Company"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="Phone">
          <Input />
        </Form.Item>

        <Form.Item name="value" label="Value">
          <Input placeholder="₹ Amount" />
        </Form.Item>

        <Form.Item name="assigned" label="Assigned To">
          <Input />
        </Form.Item>

        <Form.Item
          name="active"
          label="Status"
          valuePropName="checked"
          initialValue={true}
        >
          <Switch checkedChildren="Active" unCheckedChildren="Inactive" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Save Lead
        </Button>

      </Form>
    </Modal>
  );
}