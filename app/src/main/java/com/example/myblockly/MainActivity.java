package com.example.myblockly;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import com.google.blockly.android.AbstractBlocklyActivity;
import com.google.blockly.android.codegen.CodeGenerationRequest;
import com.google.blockly.android.codegen.LanguageDefinition;
import com.google.blockly.android.codegen.LoggingCodeGeneratorCallback;
import com.google.blockly.model.DefaultBlocks;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MainActivity extends AbstractBlocklyActivity {

    /*
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }*/


    CodeGenerationRequest.CodeGeneratorCallback mCodeGeneratorCallback =
            new LoggingCodeGeneratorCallback(this, "TESTE");

    @NonNull
    @Override
    protected String getToolboxContentsXmlPath() {
        return "default/toolbox.xml";
    }

    @NonNull
    @Override
    protected List<String> getBlockDefinitionsJsonPaths() {
        List<String> assetPaths = new ArrayList<>();
        assetPaths.add("default/atuadores_blocks.json");
        assetPaths.add("default/sensores_blocks.json");
        assetPaths.add("default/logicos_blocks.json");
        return assetPaths;
    }

    @Override
    protected LanguageDefinition getBlockGeneratorLanguage() {
        return new LanguageDefinition("default/mrc_generator.js", "Blockly.MRC");
    }

    @NonNull
    @Override
    protected List<String> getGeneratorsJsPaths() {
        List<String> assetPaths = Arrays.asList();
        return assetPaths;
    }

    @NonNull
    @Override
    protected CodeGenerationRequest.CodeGeneratorCallback getCodeGenerationCallback() {
        return mCodeGeneratorCallback;
    }
}
