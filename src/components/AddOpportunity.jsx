import { Modal, Form, Input, Select, Row, Col, Button, DatePicker } from "antd";

const { Option } = Select;

export default function AddOpportunity({ open, onClose, onSave }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
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
      title="Add Opportunity"
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={650}
      zIndex={2000}
    >
      <Form form={form} layout="vertical">

        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              label="Opportunity Name"
              name="deal"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter opportunity name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Account / Company"
              name="company"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter company name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              label="Stage"
              name="stage"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select stage">
                <Option value="Qualified">Qualified</Option>
                <Option value="Proposal Sent">Proposal Sent</Option>
                <Option value="Negotiation">Negotiation</Option>
                <Option value="Closed Won">Closed Won</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Value ($)"
              name="value"
            >
              <Input placeholder="Enter deal value" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={12}>
          <Col span={12}>
            <Form.Item
              label="Close Date"
              name="closeDate"
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Owner"
              name="owner"
            >
              <Input placeholder="Sales owner" />
            </Form.Item>
          </Col>
        </Row>

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
              Save Opportunity
            </Button>
          </Col>
        </Row>

      </Form>
    </Modal>
  );
}