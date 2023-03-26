import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}


class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(title),
      ),
      body: Center(
        child: FutureBuilder<String>(
          future: getSchemaData(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            // 请求已结束
            if (snapshot.connectionState == ConnectionState.done) {
              if (snapshot.hasError) {
                // 请求失败，显示错误
                return Text("Error: ${snapshot.error}");
              } else {
                WidgetTree widgetTree = WidgetTree.fromJsonString(snapshot.data);
                return widgetTree.build();
              }
            } else {
              // 请求未结束，显示loading
              return CircularProgressIndicator();
            }
          },
        ),
      ),
    );
  }

  Future<String> getSchemaData() async {
    // 模拟远程获取json数据
    return http.get(Uri.parse('http://localhost:5556/api/schema')).then((response) => response.body);
  }
  
}



class WidgetTree {
  final String componentName;
  final Map<String, dynamic> props;
  final List<WidgetTree> children;

  WidgetTree({required this.componentName, this.props = const {}, this.children = const []});

  factory WidgetTree.fromJson(Map<String, dynamic> json) {
    List<dynamic> childrenJson = json['children'] ?? [];
    List<WidgetTree> children = childrenJson.map((e) => WidgetTree.fromJson(e)).toList();
    Map<String, dynamic> props = Map<String, dynamic>.from(json['props'] ?? {});
    
    return WidgetTree(
      componentName: json['componentName'],
      props: props,
      children: children,
    );
  }

  static WidgetTree fromJsonString(String jsonString) {
    Map<String, dynamic> json = jsonDecode(jsonString);
    return WidgetTree.fromJson(json['data']['componentsTree'][0]);
  }

  double? _getDouble(dynamic value) {
    if (value is int) {
      return value.toDouble();
    } else if (value is double) {
      return value;
    } else if (value is String) {
      return double.tryParse(value);
    }
    return null;
  }

  Widget build() {
    Widget child;
    if (componentName == 'Page') {
      child = Column(
        // mainAxisAlignment: MainAxisAlignment.center,
        // crossAxisAlignment: CrossAxisAlignment.center,
        children: children.map((e) => e.build()).toList(),
      );
    } else if (componentName == 'Container') {
      child = Container(
        width: double.infinity,
        margin: EdgeInsets.all(_getDouble(props['margin'] ?? '0') ?? 0),
        padding: EdgeInsets.all(_getDouble(props['padding'] ?? '0') ?? 0),
        color: _getColor(props['backgroundColor']),
        child: Flex(
          direction: props['direction'] == 'horizontal' ? Axis.horizontal : Axis.vertical,
          children: children.map((e) => e.build()).toList()
        ),
      );
    } else if (componentName == 'Text') {
      child = Text(
        props['content'] ?? '',
        style: TextStyle(
          color: _getColor(props['color']),
          fontSize: _getDouble(props['fontSize'] ?? '14') ?? 14,
          height: _getDouble(props['lineHeight'] ?? '1.2') ?? 1.2,
        ),
        textAlign: _getTextAlign(props['textAlign']),
      );
    } else if (componentName == 'Button') {
      String btnType = props['type'] ?? 'primary';
      switch (btnType) {
          case 'primary':
            child = ElevatedButton(
              onPressed: () {
                print('ElevatedButton pressed');
              },
              child: Text(props['content'] ?? ''),
            );
            break;
          case 'secondary':
            child = OutlinedButton(
              onPressed: () {
                print('OutlinedButton pressed');
              },
              child: Text(props['content'] ?? ''),
            );
            break;
          case 'normal':
            child = TextButton(
              onPressed: () {
                print('TextButton pressed');
              },
              child: Text(props['content'] ?? ''),
            );
            break;
          default:
            child = ElevatedButton(
              onPressed: () {
                print('ElevatedButton pressed');
              },
              child: Text(props['content'] ?? ''),
            );
          break;
      }
    } else if (componentName == 'Image') {
      child = Image.network(
        props['src'] ?? '',
        fit: BoxFit.contain,
        width: _getDouble(props['width']) ?? 200.0,
        height: _getDouble(props['height']) ?? 200.0,
      );
    } else {
      child = Text("Invalid widget type: $componentName");
    }
    return child;
  }

  Color _getColor(String? colorString) {
    if (colorString == null) {
      return Colors.black;
    }

    if (colorString.startsWith('#')) {
      return Color(int.parse(colorString.substring(1, 7), radix: 16) + 0xFF000000);
    } else if (colorString.startsWith('rgb')) {
      List<String> rgb = colorString.substring(4, colorString.length - 1).split(',');
      return Color.fromARGB(255, int.parse(rgb[0]), int.parse(rgb[1]), int.parse(rgb[2]));
    }
  
    switch (colorString.toLowerCase()) {
      case 'red':
        return Colors.red;
      case 'green':
        return Colors.green;
      case 'blue':
        return Colors.blue;
      default:
        return Colors.black;
    }
  }

  TextAlign _getTextAlign(String? align) {
    if (align == null) {
      return TextAlign.left;
    }
    switch (align.toLowerCase()) {
      case 'left':
        return TextAlign.left;
      case 'right':
        return TextAlign.right;
      case 'center':
        return TextAlign.center;
      case 'justify':
        return TextAlign.justify;
      case 'start':
        return TextAlign.start;
      case 'end':
        return TextAlign.end;
      default:
        return TextAlign.left;
    }
  }
}