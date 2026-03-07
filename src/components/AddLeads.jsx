import { Modal, Input, Form, Button, Switch, Row, Col } from "antd";

export default function AddLeads({ open, onClose, onSave }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(values => {
      onSave({
        key: Date.now(),
        ...values
      });
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      title="Add Lead"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      zIndex={2000}
    >
      <Form form={form} layout="vertical">

        <Form.Item label="Lead Name" name="name" rules={[{ required: true }]}>
          <Input placeholder="Enter lead name" />
        </Form.Item>

        <Form.Item label="Company" name="company" rules={[{ required: true }]}>
          <Input placeholder="Enter company" />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input placeholder="Enter phone" />
        </Form.Item>

        <Form.Item label="Value" name="value">
          <Input placeholder="₹ Amount" />
        </Form.Item>

        <Form.Item label="Assigned To" name="assigned">
          <Input placeholder="Sales person" />
        </Form.Item>

        <Form.Item label="Status" name="status" valuePropName="checked">
          <Switch />
        </Form.Item>

        {/* Buttons Row */}
        <Row gutter={10}>
          <Col span={12}>
            <Button block onClick={onClose}>
              Cancel
            </Button>
          </Col>

          <Col span={12}>
            <Button
              type="primary"
              block
              onClick={handleSubmit}
            >
              Save Lead
            </Button>
          </Col>
        </Row>

      </Form>
    </Modal>
  );
}