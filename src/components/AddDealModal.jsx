import { useState, useEffect } from "react";
import { Modal, Form, Input, Select, InputNumber, DatePicker, message } from "antd";
import { customerService, userService } from "../services";
import dayjs from "dayjs";

const { Option } = Select;

export default function AddDealModal({ open, onClose, onAdd }) {
  const [form] = Form.useForm();
  const [customers, setCustomers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      fetchCustomers();
      fetchUsers();
    }
  }, [open]);

  const fetchCustomers = async () => {
    try {
      const response = await customerService.getAll();
      if (response.success) {
        setCustomers(response.data || []);
      }
    } catch (error) {
      console.error('Failed to load customers');
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await userService.getAll();
      if (response.success) {
        setUsers(response.data || []);
      }
    } catch (error) {
      console.error('Failed to load users');
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      
      // Format the data for backend
      const dealData = {
        deal_name: values.deal_name,
        customer_id: values.customer_id,
        value: values.value,
        stage: values.stage,
        probability: values.probability,
        expected_close_date: values.expected_close_date ? values.expected_close_date.format('YYYY-MM-DD') : null,
        assigned_to: values.assigned_to
      };

      await onAdd(dealData);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Modal
      title="Create Deal"
      open={open}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
      onOk={handleSubmit}
      okText="Create Deal"
      cancelText="Cancel"
      width={500}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          stage: 'Lead',
          probability: 50
        }}
      >
        <Form.Item
          label="Deal Name"
          name="deal_name"
          rules={[{ required: true, message: 'Please enter deal name' }]}
        >
          <Input placeholder="Enter deal name" />
        </Form.Item>

        <Form.Item
          label="Customer"
          name="customer_id"
          rules={[{ required: true, message: 'Please select customer' }]}
        >
          <Select placeholder="Select customer" showSearch optionFilterProp="children">
            {customers.map(customer => (
              <Option key={customer.id} value={customer.id}>
                {customer.name} {customer.company ? `(${customer.company})` : ''}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Deal Value"
          name="value"
          rules={[{ required: true, message: 'Please enter deal value' }]}
        >
          <InputNumber
            placeholder="Enter value"
            style={{ width: '100%' }}
            min={0}
            prefix="₹"
          />
        </Form.Item>

        <Form.Item
          label="Stage"
          name="stage"
          rules={[{ required: true, message: 'Please select stage' }]}
        >
          <Select placeholder="Select stage">
            <Option value="Lead">Lead</Option>
            <Option value="Qualified">Qualified</Option>
            <Option value="Proposal">Proposal</Option>
            <Option value="Negotiation">Negotiation</Option>
            <Option value="Won">Won</Option>
            <Option value="Lost">Lost</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Probability (%)"
          name="probability"
        >
          <InputNumber
            placeholder="Enter probability"
            style={{ width: '100%' }}
            min={0}
            max={100}
          />
        </Form.Item>

        <Form.Item
          label="Expected Close Date"
          name="expected_close_date"
        >
          <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="Assigned To"
          name="assigned_to"
        >
          <Select placeholder="Select user" showSearch optionFilterProp="children">
            {users.map(user => (
              <Option key={user.id} value={user.id}>
                {user.name} ({user.role})
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}