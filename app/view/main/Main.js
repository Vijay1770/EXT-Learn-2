Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        // 'MyApp.view.main.List' // Ensure this class is required here
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'top',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            items: [{
                xtype: 'mainlist'
            }]
        },
        {
            title: 'Users',
            iconCls: 'x-fa fa-user',
            layout: 'fit', // Ensure the layout is fit to accommodate the form
            items: [{
                xtype: 'mainlist'
            }]
        },
        {
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            items: [{
                xtype: 'mainlist' // Use the xtype of your form panel here
            }]
        },
        {
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
