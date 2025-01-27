Ext.onReady(function () {
  // Define a custom class for the form panel
  Ext.define('MyApp.view.main.userDetail', {
      extend: 'Ext.form.Panel',
      xtype: 'userdetailform', // This xtype is used to reference the form panel
      requires: [
        'MyApp.store.Personnel'
    ],
      id: 'newForm',
      border: true,
      width: 600,
      items: [
          {
              xtype: 'textfield',
              fieldLabel: 'Text Field',
          },
          {
              xtype: 'displayfield',
              fieldLabel: 'Display Field',
          },
          {
              xtype: 'textarea',
              fieldLabel: 'Text Area',
          },
          {
              xtype: 'datefield',
              fieldLabel: 'Date picker',
          },
          {
              xtype: 'button',
              text: 'Button',
          },
          {
              xtype: 'fieldcontainer',
              fieldLabel: 'Radio field',
              defaultType: 'radiofield',
              defaults: {
                  flex: 1,
              },
              layout: 'hbox',
              items: [
                  {
                      boxLabel: 'A',
                      inputValue: 'a',
                      id: 'radio1',
                  },
                  {
                      boxLabel: 'B',
                      inputValue: 'b',
                      id: 'radio2',
                  },
                  {
                      boxLabel: 'C',
                      inputValue: 'c',
                      id: 'radio3',
                  },
              ],
          },
          {
              xtype: 'fieldcontainer',
              fieldLabel: 'Check Box Field',
              defaultType: 'checkboxfield',
              items: [
                  {
                      boxLabel: 'HTML',
                      inputValue: 'html',
                      id: 'checkbox1',
                  },
                  {
                      boxLabel: 'CSS',
                      inputValue: 'css',
                      checked: true,
                      id: 'checkbox2',
                  },
                  {
                      boxLabel: 'JavaScript',
                      inputValue: 'js',
                      id: 'checkbox3',
                  },
              ],
          },
          {
              xtype: 'hiddenfield',
              name: 'hidden field ',
              value: 'value from hidden field',
          },
          {
              xtype: 'numberfield',
              anchor: '100%',
              fieldLabel: 'Numeric Field',
              maxValue: 99,
              minValue: 0,
          },
          {
              xtype: 'spinnerfield',
              fieldLabel: 'Spinner Field',
              step: 6,
              onSpinUp: function() {
                  var me = this;
                  if (!me.readOnly) {
                      var val = me.step;
                      if (me.getValue() !== '') {
                          val = parseInt(me.getValue().slice(0, -5));
                      }
                      me.setValue((val + me.step) + ' Pack');
                  }
              },
              onSpinDown: function() {
                  var me = this;
                  if (!me.readOnly) {
                      if (me.getValue() !== '') {
                          val = parseInt(me.getValue().slice(0, -5));
                      }
                      me.setValue((val - me.step) + ' Pack');
                  }
              }
          },
          {
              xtype: 'timefield',
              fieldLabel: 'Time field',
              minValue: '6:00 AM',
              maxValue: '8:00 PM',
              increment: 30,
              anchor: '100%',
          },
          {
              xtype: 'combobox',
              fieldLabel: 'Combo Box',
              store: Ext.create('Ext.data.Store', {
                  fields: ['abbr', 'name'],
                  data: [
                      { abbr: 'HTML', name: 'HTML' },
                      { abbr: 'CSS', name: 'CSS' },
                      { abbr: 'JS', name: 'JavaScript' },
                  ],
              }),
              valueField: 'abbr',
              displayField: 'name',
          },
          {
              xtype: 'filefield',
              fieldLabel: 'File field',
              labelWidth: 50,
              msgTarget: 'side',
              allowBlank: false,
              anchor: '100%',
              buttonText: 'Select File...',
          },
      ],
  });

  // Create an instance of the form panel if needed here
});
